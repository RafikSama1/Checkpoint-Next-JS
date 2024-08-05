import Link from "next/link";

function home() {
    return(
        <>
            <section className=" h-screen" style={{background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/home.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
                <div className="container mx-auto h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Welcome to Restaurant Name</h1>
                        <p className="text-lg mb-6">Delicious food made with passion</p>
                        <a href="#" className="bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-600">Explore Our Menu</a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Featured Dishes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="/assets/sec.jpg" alt="Dish 1" className="w-full h-64 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Dish 1</h3>
                                <p className="text-gray-700">A delicious description of dish 1.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="/assets/third.jpg" alt="Dish 2" className="w-full h-64 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Dish 2</h3>
                                <p className="text-gray-700">A delicious description of dish 2.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="/assets/fourth.jpg" alt="Dish 3" className="w-full h-64 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Dish 3</h3>
                                <p className="text-gray-700">A delicious description of dish 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-700 mb-4">"Amazing food and great atmosphere!"</p>
                            <p className="font-bold text-gray-800">- Customer 1</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-700 mb-4">"Best dining experience I've ever had."</p>
                            <p className="font-bold text-gray-800">- Customer 2</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-700 mb-4">"Will definitely come back again!"</p>
                            <p className="font-bold text-gray-800">- Customer 3</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default home;