import { Card, CardContent, Grid, TextField, Button } from '@mui/material'
import React from 'react'

function ContactForm() {
    return (
        <div>
            <h1>Contactanos</h1>
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "10px 5px" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Nombre" placeholder="Nombre" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Apellido" placeholder="Apellido" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="email" label="email" placeholder="Email" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Message" multiline rows={4} placeholder="Escribe tu mensaje aquí" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" fullWidth style={{ color: "black", backgroundColor: "beige" }}>Enviar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ContactForm
