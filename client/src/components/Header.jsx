import { Link } from "react-router-dom"

const TheHead = () => {

    return (
        <>
          <div className="container-fluid fixed-top bg-light py-2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link to={'/CatalogOfBooks'} className="me-3">Catalog</Link>
                <Link to={"/AddBook"}>Add Book</Link>
              </div>
    
              <div>
                <h1 className="mb-0">Book Catalog</h1>
              </div>
            </div>
          </div>
    
          <div className="container" style={{ paddingTop: '80px' }}>
          </div>
        </>
      );
    };
    

export default TheHead

