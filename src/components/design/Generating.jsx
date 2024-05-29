import { loading } from "../../assets";

const Generating = () => {
  return (
    <div>
      <img className="w-5 h-5 mr-4" src={loading} alt="loading" />
      AI is generating
    </div>
  );
};

export default Generating;
