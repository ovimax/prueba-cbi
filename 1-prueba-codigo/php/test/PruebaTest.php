<?php

namespace Cbi\Tests;
use \PHPUnit\Framework\TestCase;
use App\BoardState;

/**
 *
 */
class PruebaTest extends TestCase
{
	protected $status = [-1=>"NO RESUELTO",0=>"EMPATE",1=>"GANA O",2=>"GANA X"];

	public function testFrameworkConfigured()
	{
		$this->assertTrue(true);
	}

	public function get_status($board){
		$b = new BoardState($board);
		return $b->get_status();
	}

	public function test_win_O_row()
	{
		$board = [[1,1,1],
				  [2,1,2],
				  [2,2,1]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[1]);
	}

	public function test_win_O_column()
	{
		$board = [[1,1,2],
				  [2,1,2],
				  [2,1,1]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[1]);
	}

	public function test_win_X_column()
	{
		$board = [[1,2,2],
				  [2,1,2],
				  [2,1,2]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[2]);
	}

	public function test_win_X_row()
	{
		$board = [[1,1,2],
				  [2,2,2],
				  [1,2,1]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[2]);
	}

	public function test_win_X_revers_diagonal()
	{
		$board = [[1,1,2],
				  [2,2,1],
				  [2,2,1]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[2]);
	}

	public function test_win_0_diagonal()
	{
		$board = [[1,1,2],
				  [2,1,1],
				  [2,2,1]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[1]);
	}

	public function test_draw()
	{
		$board = [[1,1,2],
				  [2,2,1],
				  [1,1,2]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[0]);
	}

	public function test_not_complete()
	{
		$board = [[1,1,2],
				  [0,2,1],
				  [1,1,0]];
		$status = $this->get_status($board);
		$this->assertEquals($status, $this->status[-1]);
	}
}
