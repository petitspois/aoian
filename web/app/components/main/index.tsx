'use client'
import React from 'react';
import { Button } from '@/app/components/ui/button'
import { useModalContext } from '@/context/modal-context'
import Navigation from '@/app/components/navigation'
import Sidebar from "@/app/components/sidebar";
import Chat from '@/app/components/chat'
import Message from "@/app/components/message";

const Main = () => {
  const { setShowLoginModal } = useModalContext();

  const handleShowLoginModal = () => {
    setShowLoginModal({
      payload: '',
      onCancelCallback: () => {
        console.log('cancel');
      },
      onSaveCallback: (newPayload) => {
        console.log('save', newPayload);
      },
    });
  }

  return (
    <main className="flex p-6 w-full h-[calc(100vh-80px)] gap-6">
      <Navigation />
      <Sidebar />
      <Chat />
      <Message />
    </main>
  );
};

export default Main;
