import axios from "axios";

export const data8Validation = async (data: any) => {
  try {
    const res: any = await axios({
      method: "POST",
      url: `https://webservices.data-8.co.uk/InternationalTelephoneValidation/IsValid.json?key=${process.env.REACT_APP_DATA8_KEY}`,
      data: {
        ...data,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};
