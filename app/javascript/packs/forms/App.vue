<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <h1>File a complaint</h1>
                    <hr>
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number" id="age" class="form-control">
                    </div>
                </div>
            </div>
            <!--<div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                    <label for="message">Message</label>
                    <textarea id="message" cols="30" rows="10" class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input type="checkbox" id="sendmail" value="SendMail"> Send Mail
                        </label>

                        <label for="sendInfoMail">
                            <input type="checkbox" id="sendInfoMail" value="SendInfoMail"> Send Info Mail
                        </label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <label for="male">
                        <input type="radio" id="male" value="male"> Male
                    </label>

                    <label for="female">
                        <input type="radio" id="female" value="female"> Female
                    </label>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <label for="priority">Priority</label>
                    <select id="priority" class="form-control">
                        <option value=""></option>
                    </select>
                </div>
            </div>-->

            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <app-switch
                            v-model="isSelected" @selected_value="isSelected = $event">

                    </app-switch>
                    {{ isSelected }}
                </div>
            </div>

            <br>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <button class="btn btn-primary">
                        Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 card">
                <div class="card-block">
                    <div class="card-title">
                        <h4>Your data</h4>
                    </div>

                    <div class="card-text">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: </p>
                        <p>Password: </p>
                        <p>Age: </p>
                        <p>Message: </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li></li>
                        </ul>
                        <p>Gender: </p>
                        <p>Priority: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Switch from './Switch.vue'
    import Fullname from './Fullname.vue'

    export default {
        data(){
            return {
                isSelected: true,
                firstName: '',
                lastName: '',
                fullName: ''
            }
        },
        components: {
            appSwitch: Switch,
            appFullName: Fullname
        }
    }
</script>