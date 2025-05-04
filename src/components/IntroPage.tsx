import { useEffect, useState } from 'react';
import StarryBackground from './ui/StarryBackground';
import { motion } from 'framer-motion'; 

const IntroPage = ({ onFinish }: { onFinish: () => void }) => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => onFinish(), 1000);
      }, 3000);
      return () => clearTimeout(timer);
    }, [onFinish]);
  
    return (
      <div
        className={`fixed inset-0 z-50 bg-black overflow-hidden transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <StarryBackground />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://media.tenor.com/sQQ4ikAjQngAAAAi/dancing-ditto-ditto.gif" // Replace with your logo
              alt="Logo"
              className="w-28 h-28 md:w-40 md:h-40"
            />
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default IntroPage;