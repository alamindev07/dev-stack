import { FiX } from "react-icons/fi";

const StackItem = ({ technology, onRemove }) => {
  const { id, name, category, icon } = technology;

  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
      {/* Technology Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-50">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-6 w-6 object-contain"
        />
      </div>

      {/* Technology Information */}
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-slate-800">
          {name}
        </h4>

        <p className="mt-0.5 text-xs text-slate-400">
          {category}
        </p>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={() => onRemove(id)}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${name}`}
      >
        <FiX className="text-lg" />
      </button>
    </div>
  );
};

export default StackItem;