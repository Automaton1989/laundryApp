import EditService from "./EditService.js";
import "./providerPage.css";
import Service from "./Service";

const Services = ({
  services,
  setServices,
  modifyServiceDisplay,
  onServiceEdit,
}) => {
  //Used to delete a service
  const deleteService = (id) => {
    const deleted = services.forEach((s, i) => {
      if (s.serviceID === id) {
        services.splice(i, 1);
      }
    });

    console.log(deleted);
  };

  const addService = () => {
    console.log("ID =>", services.length);
    const newService = {
      service: "Wash and Fold",
      price: 0.0,
      perPound: false,
      serviceID: services.length,
      showDetails: false,
      showEdit: true,
    };
    setServices([...services, newService]);
  };

  const renderServices = services.map((s, i) => {
    if (s.showEdit) {
      return (
        <EditService
          key={s.serviceID}
          serviceItem={s}
          modifyServiceDisplay={modifyServiceDisplay}
          onServiceEdit={onServiceEdit}
          deleteService={deleteService}
        />
      );
    }

    return (
      <Service
        key={s.serviceID}
        id={i}
        serviceItem={s}
        modifyServiceDisplay={modifyServiceDisplay}
        deleteService={deleteService}
      />
    );
  });

  return (
    <div>
      {renderServices}
      <div>
        <small> Services Remaining: {5 - services.length}</small>{" "}
      </div>
      {services.length < 5 && <button onClick={addService}>Add Service</button>}{" "}
    </div>
  );
};

export default Services;
