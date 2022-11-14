import { forwardRef } from "react";
import styles from "./FormHnpot.module.css";

type FormHnypotProps = {
  type?: "text" | "tel" | "email" | "url";
  id: string;
  label: string;
  className?: string;
};

const FormHnypot = forwardRef<Ref, FormHnypotProps>(
  (
    {
      // Component props
      type = "text",
      id = "hny_id",
      label = "Label text",
    },
    ref
  ) => {
    // Component logic
    return (
      // Component Markup
      <>
        <label htmlFor={id} className={styles.hnyinput}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={label}
          className={styles.hnyinput}
        />
      </>
    );
  }
);

export type Ref = HTMLInputElement;

FormHnypot.displayName = "FormHnypot";

export default FormHnypot;
