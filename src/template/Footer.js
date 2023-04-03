function Footer() {
    return (
        <footer className="mt-auto py-5 bg-dark">
            <div className="container d-flex justify-content-center">
                <span className="text-muted">
                    Copyright &copy; Website {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
}

export default Footer;
