const DownloadCVButton = () => {
  return (
    <div className="download-cv">
     
      <a 
        href="/cv.pdf" 
        download="PedroPastore-CV" 
        className="bg-purple-800 hover:bg-purple-600 text-white px-4 py-2 rounded"
      >
        Descargar mi CV
      </a>
    </div>
  );
};

export default DownloadCVButton;