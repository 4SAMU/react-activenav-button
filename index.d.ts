declare module "react-activenav-button" {
  export default function ActiveNavButton(initialString: any): {
    activeLink: any;
    handleButtonClick: (link: any) => (event: any) => void;
  };
}
