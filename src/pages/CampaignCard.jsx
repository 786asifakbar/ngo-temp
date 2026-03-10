import { motion } from "framer-motion";

const CampaignCard = ({ image, title, description, progress }) => {

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img src={image} className="w-full h-48 object-cover" />

      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        {/* Animated Progress Bar */}

        <div className="w-full bg-gray-200 h-3 rounded-full">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5 }}
            className="bg-green-600 h-3 rounded-full"
          />

        </div>

      </div>

    </div>
  );
};

export default CampaignCard;