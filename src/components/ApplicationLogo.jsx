export default function ApplicationLogo({ className, Logo, circle }) {
  return <img className={className} src={Logo} ref={circle} alt="logo" />;
}
