import { useSelector, useDispatch } from 'react-redux';
import { useGetPetsQuery } from '../../api/petsApi';
import { setFilter } from '../../features/pets/petsSlice';

export default function Pets() {
  const filters = useSelector((state) => state.pets.activeFilters);
  const dispatch = useDispatch();

  const { data: pets, isLoading } = useGetPetsQuery(filters);

  const handleFilterChange = (key, value) => {
    dispatch(setFilter({ key, value }));
  };

  if(!pets){
    return <div>No hay mascotas disponibles.</div>;
  };

  if (isLoading) return <div>Cargando mascotas...</div>;

  return (
    <div>
      <p>Filtro activo: {filters.species}</p>
      {pets.map(pet => (
        <div key={pet.id}>{pet.name}</div>
      ))}
    </div>
  );
}