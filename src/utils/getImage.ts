const getImage = (image: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE}/${image}`;
};

export { getImage };
