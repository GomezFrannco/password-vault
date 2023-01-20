import styles from "./styles.module.css";

export default function Button({
  type,
  children,
}: {
  type?: "button" | "reset" | "submit";
  children: React.ReactNode;
}) {
  return (
    <button className={styles.buttonStyle} type={type}>
      {children}
    </button>
  );
}
