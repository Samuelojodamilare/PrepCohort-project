import { frontendUrl } from "../../services/graphqlClient";

const Button = ({ className, children, href }) => {
  const finalhref = href || `${frontendUrl}/explore`;
  return (
    <a
      href={finalhref}
      className={`group relative inline-flex items-center font-workSans font-semibold px-6 py-4 transition-all duration-300 rounded-md hover:scale-105 ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default Button;
