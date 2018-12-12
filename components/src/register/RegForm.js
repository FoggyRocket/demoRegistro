import React from 'react';
import {StyleSheet,KeyboardAvoidingView,View} from 'react-native'
import {Container,Content,Input,Button,Form,Item,Text,Label,Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
//import Icon from 'react-native-vector-icons/FontAwesome';

export const RegForm = ({onChange,onSumbit,user}) =>(
    <KeyboardAvoidingView  behavior="padding">
        <Form style={styles.container}>
            <Item floatingLabel>
              <Label style={styles.label}>Nombre(s)</Label>
               <Icon active name='person' style={styles.icono} />
              <Input 
                name="name"
                style={styles.texto}
                onChangeText={value=>onChange("name",value)}
             />
             
            </Item>
            <Grid>
                <Col >
                    <Item floatingLabel>
                        <Label style={styles.label}>Apellido Paterno</Label>
                        <Input 
                            name="surname"
                            style={styles.texto}
                            onChangeText={value=>onChange("surname",value)}
                        />
                        
                    </Item>
                </Col>
                <Col >
                    <Item floatingLabel>
                        <Label style={styles.label}>Apellido Materno</Label>
                        <Input 
                            name="lastname"
                            style={styles.texto}
                            onChangeText={value=>onChange("lastname",value)}
                         />
                    </Item>
                </Col>
            </Grid>      

            <Item floatingLabel>
              <Label style={styles.label}>Telefono Celular</Label>
              <Icon active name='phone-portrait' style={styles.icono} />
              <Input
                name="phone" 
                keyboardType="numeric"
                style={styles.texto}
                onChangeText={value=>onChange("phone",value)}
              />
            </Item>
            <Item floatingLabel>
              <Label style={styles.label}>Contraseña</Label>
              <Icon active name='md-unlock' style={styles.icono} />
              <Input
                name="password" 
                secureTextEntry={true}
                style={styles.texto}
                onChangeText={value=>onChange("password",value)}
              />
            </Item>
            <Item floatingLabel>
              <Label style={styles.label}>Confirmar Contraseña</Label>
              <Input
                name="passwordConfirmation"
                style={styles.texto}
                secureTextEntry={true}
                maxLength={10}
                onChangeText={value=>onChange("passwordConfirmation",value)} 
                />
            </Item>
        </Form>
        <View style={styles.footContent}>
            <View>
                <Button   rounded  style={styles.boton} onPress={onSumbit}>
                        <Text>ENVIAR REGISTRO</Text>
                </Button>
            </View>
           
            <Text style={styles.texto}>¿Ya tienes cuentas? Inicia Sesión</Text>
        </View>
    </KeyboardAvoidingView>


);

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginBottom:5
    },
    texto:{
        color:'#fff',
        fontSize:20,
        justifyContent:'flex-end'

    },
    label:{
        color:'#fff'
    },
    footContent:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    boton:{
        backgroundColor:'#f4912a',
        borderRadius:20,
        width:'70%'
    },
    icono:{
        color:'#fff',
    }

})