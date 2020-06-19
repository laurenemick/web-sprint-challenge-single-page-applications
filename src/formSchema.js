import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(2, "Name must be at least 2 characters long.")
      .required("Name input is required."),
    size: Yup
      .string()
      .oneOf(['Small', 'Medium', 'Large'], "Please select a size."),
  })
  
  export default formSchema