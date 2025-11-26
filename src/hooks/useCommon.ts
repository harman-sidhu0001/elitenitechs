import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for managing component state
 */
export const useComponentState = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const updateState = useCallback((updates: Partial<T>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, [initialState]);

  return { state, setState: updateState, resetState };
};

/**
 * Custom hook for managing loading states
 */
export const useLoadingState = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState<string | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const setErrorState = useCallback((errorMessage: string) => {
    setError(errorMessage);
    setIsLoading(false);
  }, []);

  const reset = useCallback(() => {
    setIsLoading(initialState);
    setError(null);
  }, [initialState]);

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setError: setErrorState,
    reset,
  };
};

/**
 * Custom hook for managing form state
 */
export const useFormState = <T extends Record<string, any>>(
  initialValues: T
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouchedState] = useState<
    Partial<Record<keyof T, boolean>>
  >({});

  const setValue = useCallback((name: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setError = useCallback((name: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const setFieldTouched = useCallback(
    (name: keyof T, isTouched: boolean = true) => {
      setTouchedState((prev) => ({ ...prev, [name]: isTouched }));
    },
    []
  );

  const validateField = useCallback(
    (name: keyof T, validator: (value: any) => string | null) => {
      const error = validator(values[name]);
      setError(name, error || "");
      return !error;
    },
    [values, setError]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouchedState({});
  }, [initialValues]);

  const isFieldValid = (name: keyof T) => !errors[name];
  const isFieldInvalid = (name: keyof T) => touched[name] && !!errors[name];
  const isFormValid = Object.keys(errors).every(
    (key) => !errors[key as keyof T]
  );

  return {
    values,
    errors,
    touched,
    setValue,
    setError,
    setTouched: setFieldTouched,
    validateField,
    resetForm,
    isFieldValid,
    isFieldInvalid,
    isFormValid,
  };
};

/**
 * Custom hook for managing modal state
 */
export const useModalState = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "unset";
      return newState;
    });
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

/**
 * Custom hook for managing tabs
 */
export const useTabs = (initialTab: string, tabs: string[]) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const nextTab = useCallback(() => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  }, [activeTab, tabs]);

  const previousTab = useCallback(() => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    setActiveTab(tabs[prevIndex]);
  }, [activeTab, tabs]);

  const goToTab = useCallback(
    (tab: string) => {
      if (tabs.includes(tab)) {
        setActiveTab(tab);
      }
    },
    [tabs]
  );

  return {
    activeTab,
    setActiveTab: goToTab,
    nextTab,
    previousTab,
    isFirstTab: activeTab === tabs[0],
    isLastTab: activeTab === tabs[tabs.length - 1],
  };
};

/**
 * Custom hook for managing carousel
 */
export const useCarousel = <T>(
  items: T[],
  autoPlay: boolean = false,
  interval: number = 3000
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < items.length) {
        setCurrentIndex(index);
      }
    },
    [items.length]
  );

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return {
    currentIndex,
    currentItem: items[currentIndex],
    next,
    previous,
    goTo,
    isFirst: currentIndex === 0,
    isLast: currentIndex === items.length - 1,
  };
};
