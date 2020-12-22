<?php
namespace App;

class BoardState {

    protected $status = [-1=>"NO RESUELTO",0=>"EMPATE",1=>"GANA O",2=>"GANA X"];

    public function __construct(array $board=[])
    {
        $this->board = $board;
    }

    function check_columns(){
        $board = $this->board;
        $dim = count($board);
        for($i=0; $i<$dim; $i++){
            $arr_column = [];
            for($j=0; $j<$dim; $j++){
                array_push($arr_column,$board[$j][$i]);
            }      
            $unique = array_unique($arr_column);
            if(count($unique)==1){
                return $unique[0];
            }
        }
        return null;
    }

    function check_row(){
        $board = $this->board;
        $dim = count($board);
        for($i=0; $i<$dim; $i++){
            $arr_row = [];
            for($j=0; $j<$dim; $j++){
                array_push($arr_row,$board[$i][$j]);
            }
            $unique = array_unique($arr_row);
            if(count($unique)==1){
                return $unique[0];
            }
        }
        return null;
    }

    function check_diagonal(){
        $board = $this->board;
        $dim = count($board);
        $arr_column = [];
        for($i=0; $i<$dim; $i++){
            array_push($arr_column,$board[$i][$i]);  
        }
        $unique = array_unique($arr_column);
        if(count($unique)==1){
            return $unique[0];
        }
        return null;
    }

    function check_revers_diagonal(){
        $board = $this->board;
        $dim = count($board);
        $arr_column = [];
        for($i=0; $i<$dim; $i++){
            array_push($arr_column,$board[$i][abs($dim-$i)-1]);  
        }
        $unique = array_unique($arr_column);
        if(count($unique)==1){
            return $unique[0];
        }
        return null;
    }

    function check_complete(){
        foreach($this->board as $row){
            if(in_array(0,$row)){
                return 0;
            }
        }
        return null;
    }

    public function get_status(){
        if(!is_null($this->check_columns())) return $this->status[$this->check_columns()];
        if(!is_null($this->check_row())) return $this->status[$this->check_row()];
        if(!is_null($this->check_diagonal())) return $this->status[$this->check_diagonal()];
        if(!is_null($this->check_revers_diagonal())) return $this->status[$this->check_revers_diagonal()];
        if(!is_null($this->check_complete())) return $this->status[-1];
        
        return $this->status[0];
    }
}
