"use client";

import { useRouter } from "next/navigation";
import styles from "./backButton.module.css";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className={styles.backButton} onClick={() => router.back()}>
      &larr; Back
    </button>
  );
}
