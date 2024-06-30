import "./Header.css";

const Header = () => {
  return (
    <div className="book-ticket">
      <h1>BOOK TICKET</h1>
      <form>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" id="from" placeholder=" " />
        </div>
        <div className="form-group">
          <label htmlFor="date">DD/MM/YYYY *</label>
          <input type="date" id="date" defaultValue="2024-06-30" />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="text" id="to" placeholder=" " />
        </div>
        <div className="form-group">
          <label htmlFor="class">All Classes</label>
          <select id="class">
            <option value="all-classes">All Classes</option>
            <option value="second class">SC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">GENERAL</label>
          <select id="category">
            <option value="general">GENERAL</option>
            <option value="second class">SC</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Header;
