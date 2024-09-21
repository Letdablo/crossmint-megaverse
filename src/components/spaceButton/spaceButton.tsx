
'use client'
import { useEffect, useTransition } from "react";
import styles from "./spaceButton.module.css"
import { useFormStatus } from 'react-dom'
import { en } from "@/content/en";

interface SpaceButtonProps {
  label: string; // Prop para el texto del botón
  onClick: () => void; // Callback que se ejecuta al hacer click
}


const SpaceButton = ({ label, onClick }: SpaceButtonProps) => {
  let [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) return;
  }, [isPending]);


  const onSubmit = async () => {
    startTransition(() => {
      onClick();
    });
  }
  return (
    <form action={onSubmit}>
      <button type="submit" disabled={isPending} className={styles.button}>{isPending ? en.processing : label}</button >
    </form>
  );
};

export default SpaceButton;