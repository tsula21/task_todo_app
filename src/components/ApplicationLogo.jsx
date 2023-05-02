export default function ApplicationLogo({ className, Logo, gsap }) {
  return <img className={className} src={Logo} ref={gsap} alt="logo" />;
}
