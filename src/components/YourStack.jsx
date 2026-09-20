import { FiTrash2 } from "react-icons/fi";
import StackItem from "./StackItem";

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {/* Selected Count */}
        <div className="flex h-9 min-w-9 items-center justify-center rounded-full bg-pink-50 px-2.5 text-sm font-bold text-pink-600">
          {selectedTechnologies.length}
        </div>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
            🧰
          </div>

          <h3 className="mt-4 text-sm font-semibold text-slate-700">
            Your stack is empty
          </h3>

          <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-400">
            Add technologies from the list to start building your development
            stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-6 space-y-3">
            {selectedTechnologies.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-100"
          >
            <FiTrash2 />
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;