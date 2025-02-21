export default function Profile({ name, tag, location, image }) {
  return (
    <div>
      <img src={image} alt="User avatar" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
}
