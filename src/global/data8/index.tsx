import axios from "axios";

export const data8Validation = async (data: any, endpoint: string) => {
  try {
    const res: any = await axios({
      method: "POST",
      url: endpoint + `${process.env.REACT_APP_DATA8_KEY}`,
      data: {
        ...data,
      },
    });

    return res.data;
  } catch (err) {
    return err;
  }
};
