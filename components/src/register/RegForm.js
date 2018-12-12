import React from 'react';
import {StyleSheet,KeyboardAvoidingView,View} from 'react-native'
import {Container,Content,Input,Button,Form,Item,Text,Label,Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
//import Icon from 'react-native-vector-icons/FontAwesome';

export const RegForm = ({onChange,onSumbit,user}) =>(
    <KeyboardAvoidingView  behavior="padding">
        <Form style={styles.container}>
            <Item stackedLabel>
              <Label style={styles.label}>Nombre(s)</Label>
              <Input 
                name="name"
                style={styles.texto}
                onChangeText={value=>onChange("name",value)}
             />
            </Item>
            <Grid>
                <Col >
                    <Item stackedLabel>
                        <Label style={styles.label}>Apellido Paterno</Label>
                        <Input 
                            name="surname"
                            style={styles.texto}
                            onChangeText={value=>onChange("surname",value)}
                        />
                    </Item>
                </Col>
                <Col >
                    <Item stackedLabel>
                        <Label style={styles.label}>Apellido Materno</Label>
                        <Input 
                            name="lastname"
                            style={styles.texto}
                            onChangeText={value=>onChange("lastname",value)}
                         />
                    </Item>
                </Col>
            </Grid>      

            <Item stackedLabel>
              <Label style={styles.label}>Telefono Celular</Label>
              <Input
                name="phone" 
                keyboardType="numeric"
                style={styles.texto}
                onChangeText={value=>onChange("phone",value)}
              />
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>Contraseña</Label>
              <Input
                name="password" 
                secureTextEntry={true}
                style={styles.texto}
                onChangeText={value=>onChange("password",value)}
              />
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>Confirmar Contraseña</Label>
              <Input
                name="passwordConfirmation"
                style={styles.texto}
                secureTextEntry={true}
                onChangeText={value=>onChange("passwordConfirmation",value)} 
                />
            </Item>
        </Form>
        <View style={styles.footContent}>
            <Button full  rounded  style={styles.boton} onPress={onSumbit}>
                    <Text>ENVIAR REGISTRO</Text>
            </Button>
            <Text style={styles.texto}>¿Ya tienes cuentas? Inicia Sesión</Text>
        </View>
    </KeyboardAvoidingView>


);

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    texto:{
        color:'#fff',
        fontSize:16,

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
        borderRadius:20
    }

})