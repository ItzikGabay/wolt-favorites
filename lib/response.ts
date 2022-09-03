export const sendErrorResponse = (
  res: any,
  message?: string,
  code: number = 500,
  data?: object,
) => {
  return res.status(code).json({
    status: 'error',
    message,
    data,
  });
};

export const sendSuccessResponse = (
  res: any,
  message: string | null,
  code: number = 200,
  data?: object,
) => {
  return res.status(code).json({
    status: 'success',
    message,
    data,
  });
};
