import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SelectShowcase from './components/select/SelectShowcase'
import TextareaShowcase from './components/textarea/TextareaShowcase'
import RadioShowcase from './components/radio/RadioShowcase'
import InputShowcase from "./components/input/InputShowcase";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center space-x-8 py-4">
            <Link 
                to="/input" 
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Input Animation
              </Link>
              <Link 
                to="/select" 
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Select Animations
              </Link>
              <Link 
                to="/textarea" 
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Textarea Animations
              </Link>
              <Link 
                to="/radio" 
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Radio Animations
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/select" element={<SelectShowcase />} />
          <Route path="/input" element={<InputShowcase />} />
          <Route path="/textarea" element={<TextareaShowcase />} />
          <Route path="/radio" element={<RadioShowcase />} />
          <Route path="/" element={<InputShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
