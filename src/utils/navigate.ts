const navigateToPostDetails = (router: any, uuid?: string) => {
  if (!uuid) return undefined;
  router.push(`/posts/${uuid}`);
};

export { navigateToPostDetails };
