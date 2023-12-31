import { useForm } from "react-hook-form";
import { validateContact } from "./validations";
import { useCallback, useMemo, useState } from "react";
import { attemptSendEmail } from "@/app/helpers/contact/api";

/**
 * @type {import("@/app/structure/FormContact/types").StateFormContact}
 */
const INITIAL_STATE = {
  isSendingEmail: false,
};

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

/**
 * Handle the contact form
 * @returns {import("./types").ReturnUseContact}
 */
export default function useContact() {
  const [state, setState] = useState(INITIAL_STATE);

  const resolver = useYupValidationResolver(validateContact);

  /**
   * @type {import("react-hook-form").UseFormReturn<import("./types").ContactFormI>}
   */
  const form = useForm({
    shouldUnregister: true,
    resolver,
    criteriaMode: "firstError",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      enterprise: null,
      message: null,
      phone: "",
    },
  });

  /**
   * Attempt send the email
   * @param {import("./types").ContactFormI} formValues - Form values
   */
  const sendEmail = async (formValues) => {
    setState((current) => ({
      ...current,
      isSendingEmail: true,
    }));

    await attemptSendEmail(formValues);

    setState((current) => ({
      ...current,
      isSendingEmail: false,
    }));
  };

  return { form, ...state, sendEmail };
}
