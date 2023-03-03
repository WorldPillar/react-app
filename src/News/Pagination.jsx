import PaginationBS from 'react-bootstrap/Pagination';


const Pagination = () => {
    return (
        <div className="footer">
        <PaginationBS size="lg">
            <PaginationBS.Item>{1}</PaginationBS.Item>
            <PaginationBS.Item>{2}</PaginationBS.Item>
            <PaginationBS.Item>{3}</PaginationBS.Item>
        </PaginationBS>
        </div>
    );
}

export default Pagination