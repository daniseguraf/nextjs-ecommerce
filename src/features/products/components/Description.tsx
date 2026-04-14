export const Description = ({ description }: { description: string }) => {
  return (
    <div className="py-2">
      <h3 className="text-md font-semibold">Description</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};
