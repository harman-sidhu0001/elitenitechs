import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaChartLine, FaUsers, FaShoppingCart, FaDollarSign, FaBell,
  FaCog, FaSearch, FaPlus, FaDownload, FaFilter,
  FaArrowUp, FaArrowDown, FaEllipsisH, FaEye, FaEdit, FaTrash,
  FaRocket,
  FaBars, FaTh, FaList, FaHome, FaFolder, FaFileAlt, FaInbox
} from 'react-icons/fa';
import { useState } from 'react';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('grid');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      change: '+12.5%',
      trend: 'up',
      icon: FaDollarSign,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Users',
      value: '8,429',
      change: '+23.1%',
      trend: 'up',
      icon: FaUsers,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.4%',
      trend: 'down',
      icon: FaChartLine,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Avg. Order Value',
      value: '$89.32',
      change: '+8.7%',
      trend: 'up',
      icon: FaShoppingCart,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: 'Sarah Chen',
      action: 'completed purchase',
      target: 'Enterprise Plan',
      time: '2 minutes ago',
      avatar: '/api/placeholder/40/40',
      type: 'success'
    },
    {
      id: 2,
      user: 'Marcus Rodriguez',
      action: 'updated settings',
      target: 'API Configuration',
      time: '15 minutes ago',
      avatar: '/api/placeholder/40/40',
      type: 'info'
    },
    {
      id: 3,
      user: 'Emily Johnson',
      action: 'created new project',
      target: 'Marketing Campaign',
      time: '1 hour ago',
      avatar: '/api/placeholder/40/40',
      type: 'success'
    },
    {
      id: 4,
      user: 'System',
      action: 'backup completed',
      target: 'Database Backup',
      time: '2 hours ago',
      avatar: '/api/placeholder/40/40',
      type: 'success'
    },
    {
      id: 5,
      user: 'David Kim',
      action: 'reported issue',
      target: 'Performance Optimization',
      time: '3 hours ago',
      avatar: '/api/placeholder/40/40',
      type: 'warning'
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      status: 'in-progress',
      progress: 75,
      deadline: '2024-11-15',
      team: ['SC', 'MR', 'EJ'],
      priority: 'high',
      budget: '$25,000'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'planning',
      progress: 25,
      deadline: '2024-12-01',
      team: ['DK', 'SC'],
      priority: 'medium',
      budget: '$45,000'
    },
    {
      id: 3,
      name: 'Marketing Campaign Q4',
      status: 'in-progress',
      progress: 60,
      deadline: '2024-11-30',
      team: ['EJ', 'MR', 'SC', 'DK'],
      priority: 'high',
      budget: '$15,000'
    },
    {
      id: 4,
      name: 'API Integration',
      status: 'completed',
      progress: 100,
      deadline: '2024-10-30',
      team: ['DK'],
      priority: 'low',
      budget: '$8,000'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'New user registration',
      message: 'John Doe just signed up for Enterprise plan',
      time: '5 min ago',
      type: 'info',
      read: false
    },
    {
      id: 2,
      title: 'Payment received',
      message: '$2,500 payment from Acme Corp',
      time: '1 hour ago',
      type: 'success',
      read: false
    },
    {
      id: 3,
      title: 'Server maintenance',
      message: 'Scheduled maintenance in 2 hours',
      time: '2 hours ago',
      type: 'warning',
      read: true
    }
  ];

  const chartData = [
    { day: 'Mon', revenue: 4200, users: 240 },
    { day: 'Tue', revenue: 5300, users: 280 },
    { day: 'Wed', revenue: 6100, users: 320 },
    { day: 'Thu', revenue: 7800, users: 380 },
    { day: 'Fri', revenue: 9200, users: 420 },
    { day: 'Sat', revenue: 8100, users: 360 },
    { day: 'Sun', revenue: 6900, users: 310 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              <FaBars className="text-gray-600" />
            </motion.button>
            
            <div className="relative">
              <motion.input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                whileFocus={{ scale: 1.02 }}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <motion.button
                onClick={() => setActiveView('grid')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded ${activeView === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <FaTh className="text-gray-600" />
              </motion.button>
              <motion.button
                onClick={() => setActiveView('list')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded ${activeView === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <FaList className="text-gray-600" />
              </motion.button>
            </div>

            {/* Period Selector */}
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>

            {/* Notifications */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 relative">
                <FaBell className="text-gray-600" />
                {notifications.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                  >
                    {notifications.length}
                  </motion.span>
                )}
              </button>
            </motion.div>

            {/* User Menu */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <span className="font-medium">John Doe</span>
            </motion.div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
          <div className="space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <FaRocket className="text-white" />
              </div>
              <span className="text-xl font-bold">CloudFlow</span>
            </motion.div>

            {/* Navigation */}
            <nav className="space-y-2">
              {[
                { icon: FaHome, label: 'Dashboard', active: true },
                { icon: FaChartLine, label: 'Analytics', active: false },
                { icon: FaUsers, label: 'Customers', active: false },
                { icon: FaShoppingCart, label: 'Sales', active: false },
                { icon: FaFolder, label: 'Projects', active: false },
                { icon: FaFileAlt, label: 'Reports', active: false },
                { icon: FaInbox, label: 'Messages', active: false },
                { icon: FaCog, label: 'Settings', active: false }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    item.active
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <item.icon className={item.active ? 'text-white' : 'text-gray-500'} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase">Quick Actions</h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaPlus />
                <span>New Project</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaDownload />
                <span>Export Report</span>
              </motion.button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-gray-600">Here's what's happening with your business today.</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${stat.bgColor} p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    <stat.icon className="text-white text-xl" />
                  </motion.div>
                  <div className={`flex items-center space-x-1 text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Revenue Overview</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Details
                </motion.button>
              </div>
              
              {/* Simple Chart Visualization */}
              <div className="space-y-4">
                {chartData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 text-sm font-medium text-gray-600">{data.day}</div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(data.revenue / 10000) * 100}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                        />
                      </div>
                      <span className="absolute right-2 top-1 text-xs font-medium text-gray-700">
                        ${data.revenue.toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View All
                </motion.button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>
                        <span className="text-gray-600"> {activity.action} </span>
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Projects Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-6"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Active Projects</h2>
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    <FaFilter className="text-gray-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    <FaEllipsisH className="text-gray-600" />
                  </motion.button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project, index) => (
                    <motion.tr
                      key={project.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                      className="cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{project.name}</div>
                        <div className="flex items-center space-x-1 mt-1">
                          {project.team.map((member, i) => (
                            <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {member}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === 'completed' ? 'bg-green-100 text-green-800' :
                          project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-1 mr-3">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                              />
                            </div>
                          </div>
                          <span className="text-sm text-gray-600">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {project.deadline}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <FaEye />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <FaEdit />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/demo/saas-marketing" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4 md:mb-0">
              ← Back to Website
            </Link>
            <p className="text-gray-400 text-sm">
              © 2024 CloudFlow Dashboard. Real-time business management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;