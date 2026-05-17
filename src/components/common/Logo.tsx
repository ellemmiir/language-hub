import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";

type LogoProps = {
  width?: number | string;
  height?: number | string;
};

export function Logo({ width = 40, height = 40 }: LogoProps) {
  return (
    <>
      <img
        src={logoLight}
        alt="Логотип"
        className="block dark:hidden"
        style={{ width, height }}
      />
      <img
        src={logoDark}
        alt="Логотип"
        className="hidden dark:block"
        style={{ width, height }}
      />
    </>
  );
}
