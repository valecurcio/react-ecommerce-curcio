import * as React from 'react';
import './FAQs.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function FAQs() {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <div className="faq-container" style={{ maxWidth: 550, margin: "0 auto", padding: "10px 5px" }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary className="question" aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              ¿Hacen envíos al interior del país?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Sí! Enviamos a todo el país mediante  Correo Argentino. Podés seleccionar retirarlo en la sucursal mas cercana  o hacerlo llegar a tu casa.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary className="question" aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              ¿Tienen local a la calle?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            No, somos una tienda virtual. Disponemos de un punto de entrega en Almagro (Capital Federal) y otro en Quilmes. Cuando retires tu orden personalmente podrás abonar en efectivo.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary className="question" aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              ¿Cuáles son los medios de pago aceptados?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Podés abonar mediante transferencia bancaria y con todos los medios de pago de Mercadopago. Adicionalmente, si retirás tu orden por Almagro o Quilmes, podés abonar en efectivo.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary className="question" aria-controls="panel4d-content" id="panel4d-header">
            <Typography>
              ¿Puedo modificar la dirección de entrega?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Después de completar su pedido, no es posible cambiar la dirección de entrega. Para obtener más información, comuníquese con nuestro Centro de atención a través de los canales disponibles en la parte inferior.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary className="question" aria-controls="panel5d-content" id="panel5d-header">
            <Typography>
              ¿Cómo puedo realizar el seguimiento de mi pedido?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Para realizar un seguimiento de la entrega de su pedido en nuestro sitio web, vaya a "Iniciar sesión" y vaya sucesivamente a "Mis pedidos" También te enviaremos un correo electrónico con el número de guía de cada pedido.

            ¡Importante! Se realizarán hasta 3 intentos de entrega: en ausencia del destinatario o responsable de recepción, el producto será devuelto al remitente. No hacemos envíos fuera de la república mexicana. Universal Music no realiza entregas en apartados postales.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary className="question" aria-controls="panel6d-content" id="panel6d-header">
            <Typography>
              ¿Cuál es el plazo de entrega?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Después de realizar la compra, el tiempo de entrega se contará después de la confirmación de sus datos de registro y la confirmación del pago, y el análisis de los datos de registro puede demorar hasta 1 día hábil.

            ¡Importante! Los tiempos de entrega se calculan a partir de la fecha de aprobación del pago de 2 a 7 días laborales.

            Es importante que verifiques si estás haciendo una pre-compra y te informes de la fecha de entrega, recuerda que la fecha estipulada es aproximada ya que algunos productos son importados y dependemos del trámite en aduanas.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQs

