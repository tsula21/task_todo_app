export default function ApplicationTitle({ className, Text, headerDetails }) {
  return (
    <h1 className={className} ref={headerDetails}>
      {Text}
    </h1>
  );
}
