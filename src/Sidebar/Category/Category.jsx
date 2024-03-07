import Input from "../../components/Input";
import "./Category.css";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="siderbar-title">Gategory</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="" />
          <span className="checkmark"></span> All
        </label>
      </div>
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name=""
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
      />
    </div>
  );
};

export default Category;
