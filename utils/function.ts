export const getPlainText = (body: any) => {
  return (
    body
      .filter((block: any) => block._type === "block")
      .map((block: any) =>
        block.children.map((child: any) => child.text).join(" "),
      )
      .join(" ")
      .slice(0, 102) + "..."
  );
};
