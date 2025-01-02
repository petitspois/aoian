import type { Dispatch, SetStateAction } from "react";
import { useCallback, useState } from "react";
import { createContext, useContext, useContextSelector } from "use-context-selector";


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
  setShowAccountSettingModal: Dispatch<SetStateAction<ModalState<string> | null>>
}


const ModalContext = createContext<ModalContextState>({
  setShowAccountSettingModal: () => {
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
  const [showAccountSettingModal, setShowAccountSettingModal] = useState<ModalState<string> | null>(null);

  const handleCancelAccountSettingModal = () => {
    setShowAccountSettingModal(null);
    if (showAccountSettingModal?.onCancelCallback)
      showAccountSettingModal?.onCancelCallback();
  };

  const handleSaveAccountSettingModal = useCallback(() => {
    if (showAccountSettingModal?.onSaveCallback)
      showAccountSettingModal.onSaveCallback(showAccountSettingModal.payload);
    setShowAccountSettingModal(null);
  }, [showAccountSettingModal]);

  return (
    <ModalContext.Provider
      value={{
        setShowAccountSettingModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );

};
