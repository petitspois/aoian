'use client'
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useState } from "react";
import { createContext, useContext, useContextSelector } from "use-context-selector";

import LoginModal from '@/app/components/auth/login'


export type ModalState<T> = {
  payload: T
  onCancelCallback?: () => void
  onSaveCallback?: (newPayload: T) => void
  onRemoveCallback?: (newPayload: T) => void
  onEditCallback?: (newPayload: T) => void
  onValidateBeforeSaveCallback?: (newPayload: T) => boolean
  isEditMode?: boolean
}

export type ModalContextState = {
  setShowLoginModal: Dispatch<SetStateAction<ModalState<string> | null>>
}


const ModalContext = createContext<ModalContextState>({
  setShowLoginModal: () => {
  },
});

export const useModalContext = () => useContext(ModalContext);

// Adding a dangling comma to avoid the generic parsing issue in tsx, see:
// https://github.com/microsoft/TypeScript/issues/15713
// eslint-disable-next-line @typescript-eslint/comma-dangle
export const useModalContextSelector = <T, >(selector: (state: ModalContextState) => T): T =>
  useContextSelector(ModalContext, selector);


type ModalContextProviderProps = {
  children: React.ReactNode
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [showLoginModal, setShowLoginModal] = useState<ModalState<string> | null>(null);

  const handleCancelLoginModal = () => {
    setShowLoginModal(null);
    if (showLoginModal?.onCancelCallback)
      showLoginModal?.onCancelCallback();
  };

  const handleSaveLoginModal = useCallback(() => {
    if (showLoginModal?.onSaveCallback)
      showLoginModal.onSaveCallback(showLoginModal.payload);
    setShowLoginModal(null);
  }, [showLoginModal]);

  return (
    <ModalContext.Provider
      value={{
        setShowLoginModal,
      }}
    >
      <>
        {children}
        {showLoginModal && (
          <LoginModal
            onCancel={handleCancelLoginModal}
            onSave={handleSaveLoginModal}
            payload={showLoginModal.payload}
          />
        )}
      </>
    </ModalContext.Provider>
  );

};
