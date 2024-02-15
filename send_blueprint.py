from flask import Blueprint, render_template

send_blueprint = Blueprint('send', __name__,
                               template_folder='templates',
                               static_folder='static',
                               static_url_path='/frontend/send-to-anyone-page/static')


@send_blueprint.route('/send', methods=["GET"])
def send_index():
    return render_template('send-to-anyone.html')


@send_blueprint.route('/send/<nav>', methods=["GET"])
def send_nav():
    return render_template('send-to-anyone.html')
