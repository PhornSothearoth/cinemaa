
const Cards = ({ url, tittle }) => {


  return (
    <section > 
      <div className="w-full max-w-sm  dark:bg-gray-800 dark:border-gray-700 duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img className="p-2 rounded-t-lg" src={url} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {tittle}
            </h5>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cards;
