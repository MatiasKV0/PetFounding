import { useSelector, useDispatch } from 'react-redux';
import { useGetMascotasQuery } from '../../api/mascotasApi';
import { setFilter } from './mascotasSlice';

export default function CatPets() {
  const filters = useSelector((state) => state.mascotas.activeFilters);
  const dispatch = useDispatch();

  const { data: mascotas, isLoading } = useGetMascotasQuery(filters);

  const handleFilterChange = (key, value) => {
    dispatch(setFilter({ key, value }));
  };

  if(!mascotas){
    return <div>No hay mascotas disponibles.</div>;
  };

  if (isLoading) return <div>Cargando mascotas...</div>;

  return (
    <div>
      <p>Filtro activo: {filters.especie}</p>
      {mascotas.map(mascota => (
        <div key={mascota.id}>{mascota.nombre}</div>
      ))}
    </div>
  );
}