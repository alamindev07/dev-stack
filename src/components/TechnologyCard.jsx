import { FiCheck, FiStar } from "react-icons/fi";

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">
        {/* Technology Icon */}
        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={icon}
            alt={`${name} logo`}
            className="h-9 w-9 object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-pink-50 b px-3 py-1 text-xs font-medium text-pink-600">
          {badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Meta Information */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        {/* Category */}
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {category}
        </span>

        {/* Difficulty */}
        <span className="text-xs text-slate-400">
          {difficulty}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
          <FiStar className="fill-yellow-400 text-yellow-400" />
          {rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
          isAdded
            ? "cursor-not-allowed bg-green-50 text-green-600"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? (
          <>
            <FiCheck />
            Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </article>
  );
};

export default TechnologyCard;