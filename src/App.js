
import './App.css';
import Testimonial from './components/Testimonial'
import reviews from './data'

function App() {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
}

export default App;
