import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import type { UIState, ModalProps } from '../types';

interface UIStore extends UIState {
  // Actions
  setScrolled: (scrolled: boolean) => void;
  setActiveTestimonial: (index: number) => void;
  setExpandedFaq: (index: number | null) => void;
  setHoveredFeature: (index: number | null) => void;
  openModal: (props: Omit<ModalProps, 'isOpen' | 'onClose'>) => void;
  closeModal: () => void;
  resetUI: () => void;
}

const initialState: UIState = {
  scrolled: false,
  activeTestimonial: 0,
  expandedFaq: null,
  hoveredFeature: null,
  isModalOpen: false,
  modalContent: null,
};

export const useUIStore = create<UIStore>()(
  devtools(
    subscribeWithSelector((set) => ({
      ...initialState,

      // Scroll state
      setScrolled: (scrolled) => set({ scrolled }, false, 'setScrolled'),

      // Testimonial state
      setActiveTestimonial: (index) => set({ activeTestimonial: index }, false, 'setActiveTestimonial'),

      // FAQ state
      setExpandedFaq: (index) => set({ expandedFaq: index }, false, 'setExpandedFaq'),

      // Feature hover state
      setHoveredFeature: (index) => set({ hoveredFeature: index }, false, 'setHoveredFeature'),

      // Modal state
      openModal: (props) => set(
        { 
          isModalOpen: true, 
          modalContent: {
            title: props.title,
            content: props.children,
            size: props.size || 'md'
          }
        }, 
        false, 
        'openModal'
      ),

      closeModal: () => set(
        { 
          isModalOpen: false, 
          modalContent: null 
        }, 
        false, 
        'closeModal'
      ),

      // Reset all UI state
      resetUI: () => set(initialState, false, 'resetUI'),
    })),
    {
      name: 'ui-store',
    }
  )
);

// Selectors for optimized re-renders
export const useScrolled = () => useUIStore((state) => state.scrolled);
export const useActiveTestimonial = () => useUIStore((state) => state.activeTestimonial);
export const useExpandedFaq = () => useUIStore((state) => state.expandedFaq);
export const useHoveredFeature = () => useUIStore((state) => state.hoveredFeature);
export const useModal = () => useUIStore((state) => ({
  isOpen: state.isModalOpen,
  content: state.modalContent,
  openModal: state.openModal,
  closeModal: state.closeModal,
}));

// Combined selectors for components that need both state and actions
export const useTestimonialControls = () => useUIStore((state) => ({
  activeTestimonial: state.activeTestimonial,
  setActiveTestimonial: state.setActiveTestimonial,
}));