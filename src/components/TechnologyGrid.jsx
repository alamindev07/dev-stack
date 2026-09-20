import TechnologyCard from "./TechnologyCard";

const TechnologyGrid = ({
  technologies,
  selectedTechnologies,
  onAdd,
}) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => {
        const isAdded = selectedTechnologies.some(
          (item) => item.id === technology.id,
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={isAdded}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default TechnologyGrid;