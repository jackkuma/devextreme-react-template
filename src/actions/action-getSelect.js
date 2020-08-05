export const get_meeting_infos = (item_id, item_name) => {
    return (dispatch) => {
        dispatch(get_meeting_infos_pending());
        return fetch(https_url + "/get-meeting-infos?ID=" + item_id + "&Name=" + item_name, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            secureProtocol: "TLSv1_2_method"
        })
        .then(response => {
          return response.clone().json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            dispatch(get_select_infos_success(jsonData));
        })
        .catch(err => {
            console.log(err);
            dispatch(getError());
        });
    }
}